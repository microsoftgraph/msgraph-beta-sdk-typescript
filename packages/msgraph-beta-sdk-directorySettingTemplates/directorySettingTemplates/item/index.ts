/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDirectorySettingTemplateFromDiscriminatorValue, serializeDirectorySettingTemplate, type DirectorySettingTemplate } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CheckMemberGroupsRequestBuilderRequestsMetadata, CheckMemberGroupsRequestBuilderUriTemplate, type CheckMemberGroupsRequestBuilder } from './checkMemberGroups/';
import { CheckMemberObjectsRequestBuilderRequestsMetadata, CheckMemberObjectsRequestBuilderUriTemplate, type CheckMemberObjectsRequestBuilder } from './checkMemberObjects/';
import { GetMemberGroupsRequestBuilderRequestsMetadata, GetMemberGroupsRequestBuilderUriTemplate, type GetMemberGroupsRequestBuilder } from './getMemberGroups/';
import { GetMemberObjectsRequestBuilderRequestsMetadata, GetMemberObjectsRequestBuilderUriTemplate, type GetMemberObjectsRequestBuilder } from './getMemberObjects/';
import { RestoreRequestBuilderRequestsMetadata, RestoreRequestBuilderUriTemplate, type RestoreRequestBuilder } from './restore/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of directorySettingTemplate entities.
 */
export interface DirectorySettingTemplateItemRequestBuilder extends BaseRequestBuilder<DirectorySettingTemplateItemRequestBuilder> {
    /**
     * Provides operations to call the checkMemberGroups method.
     */
    get checkMemberGroups(): CheckMemberGroupsRequestBuilder;
    /**
     * Provides operations to call the checkMemberObjects method.
     */
    get checkMemberObjects(): CheckMemberObjectsRequestBuilder;
    /**
     * Provides operations to call the getMemberGroups method.
     */
    get getMemberGroups(): GetMemberGroupsRequestBuilder;
    /**
     * Provides operations to call the getMemberObjects method.
     */
    get getMemberObjects(): GetMemberObjectsRequestBuilder;
    /**
     * Provides operations to call the restore method.
     */
    get restore(): RestoreRequestBuilder;
    /**
     * Delete entity from directorySettingTemplates
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A directory setting template represents a template of settings from which settings may be created within a tenant. This operation allows retrieval of the properties of the directorySettingTemplate object, including the available settings and their defaults.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectorySettingTemplate
     * @see {@link https://learn.microsoft.com/graph/api/directorysettingtemplate-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DirectorySettingTemplateItemRequestBuilderGetQueryParameters> | undefined) : Promise<DirectorySettingTemplate | undefined>;
    /**
     * Update entity in directorySettingTemplates
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectorySettingTemplate
     */
     patch(body: DirectorySettingTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DirectorySettingTemplate | undefined>;
    /**
     * Delete entity from directorySettingTemplates
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A directory setting template represents a template of settings from which settings may be created within a tenant. This operation allows retrieval of the properties of the directorySettingTemplate object, including the available settings and their defaults.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DirectorySettingTemplateItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update entity in directorySettingTemplates
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: DirectorySettingTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A directory setting template represents a template of settings from which settings may be created within a tenant. This operation allows retrieval of the properties of the directorySettingTemplate object, including the available settings and their defaults.
 */
export interface DirectorySettingTemplateItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DirectorySettingTemplateItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DirectorySettingTemplateItemRequestBuilderNavigationMetadata: Record<Exclude<keyof DirectorySettingTemplateItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    checkMemberGroups: {
        uriTemplate: CheckMemberGroupsRequestBuilderUriTemplate,
        requestsMetadata: CheckMemberGroupsRequestBuilderRequestsMetadata,
    },
    checkMemberObjects: {
        uriTemplate: CheckMemberObjectsRequestBuilderUriTemplate,
        requestsMetadata: CheckMemberObjectsRequestBuilderRequestsMetadata,
    },
    getMemberGroups: {
        uriTemplate: GetMemberGroupsRequestBuilderUriTemplate,
        requestsMetadata: GetMemberGroupsRequestBuilderRequestsMetadata,
    },
    getMemberObjects: {
        uriTemplate: GetMemberObjectsRequestBuilderUriTemplate,
        requestsMetadata: GetMemberObjectsRequestBuilderRequestsMetadata,
    },
    restore: {
        uriTemplate: RestoreRequestBuilderUriTemplate,
        requestsMetadata: RestoreRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DirectorySettingTemplateItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDirectorySettingTemplateFromDiscriminatorValue,
        queryParametersMapper: DirectorySettingTemplateItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDirectorySettingTemplateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDirectorySettingTemplate,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const DirectorySettingTemplateItemRequestBuilderUriTemplate = "{+baseurl}/directorySettingTemplates/{directorySettingTemplate%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */