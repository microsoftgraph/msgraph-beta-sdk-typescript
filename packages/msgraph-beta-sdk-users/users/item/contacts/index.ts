/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createContactCollectionResponseFromDiscriminatorValue, createContactFromDiscriminatorValue, serializeContact, type Contact, type ContactCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/';
import { DeltaRequestBuilderRequestsMetadata, type DeltaRequestBuilder } from './delta/';
import { ContactItemRequestBuilderNavigationMetadata, ContactItemRequestBuilderRequestsMetadata, type ContactItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contacts property of the microsoft.graph.user entity.
 */
export interface ContactsRequestBuilder extends BaseRequestBuilder<ContactsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the delta method.
     */
    get delta(): DeltaRequestBuilder;
    /**
     * Provides operations to manage the contacts property of the microsoft.graph.user entity.
     * @param contactId The unique identifier of contact
     * @returns {ContactItemRequestBuilder}
     */
     byContactId(contactId: string) : ContactItemRequestBuilder;
    /**
     * Get contacts in the user's mailbox. There are two scenarios where an app can get contacts in another user's contact folder:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ContactCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/user-list-contacts?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ContactsRequestBuilderGetQueryParameters> | undefined) : Promise<ContactCollectionResponse | undefined>;
    /**
     * Add a contact to the root Contacts folder or to the contacts endpoint of another contact folder.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Contact>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/user-post-contacts?view=graph-rest-1.0|Find more info here}
     */
     post(body: Contact, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Contact | undefined>;
    /**
     * Get contacts in the user's mailbox. There are two scenarios where an app can get contacts in another user's contact folder:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ContactsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Add a contact to the root Contacts folder or to the contacts endpoint of another contact folder.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Contact, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get contacts in the user's mailbox. There are two scenarios where an app can get contacts in another user's contact folder:
 */
export interface ContactsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const ContactsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/contacts{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ContactsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ContactsRequestBuilderNavigationMetadata: Record<Exclude<keyof ContactsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byContactId: {
        requestsMetadata: ContactItemRequestBuilderRequestsMetadata,
        navigationMetadata: ContactItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["contact%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    delta: {
        requestsMetadata: DeltaRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ContactsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ContactsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createContactCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ContactsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ContactsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createContactFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeContact,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
