/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createFilePlanDescriptorFromDiscriminatorValue, serializeFilePlanDescriptor, type FilePlanDescriptor } from '@microsoft/msgraph-beta-sdk/models/security/';
import { AuthorityTemplateRequestBuilderRequestsMetadata, AuthorityTemplateRequestBuilderUriTemplate, type AuthorityTemplateRequestBuilder } from './authorityTemplate/';
import { CategoryTemplateRequestBuilderRequestsMetadata, CategoryTemplateRequestBuilderUriTemplate, type CategoryTemplateRequestBuilder } from './categoryTemplate/';
import { CitationTemplateRequestBuilderRequestsMetadata, CitationTemplateRequestBuilderUriTemplate, type CitationTemplateRequestBuilder } from './citationTemplate/';
import { DepartmentTemplateRequestBuilderRequestsMetadata, DepartmentTemplateRequestBuilderUriTemplate, type DepartmentTemplateRequestBuilder } from './departmentTemplate/';
import { FilePlanReferenceTemplateRequestBuilderRequestsMetadata, FilePlanReferenceTemplateRequestBuilderUriTemplate, type FilePlanReferenceTemplateRequestBuilder } from './filePlanReferenceTemplate/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the descriptors property of the microsoft.graph.security.retentionLabel entity.
 */
export interface DescriptorsRequestBuilder extends BaseRequestBuilder<DescriptorsRequestBuilder> {
    /**
     * Provides operations to manage the authorityTemplate property of the microsoft.graph.security.filePlanDescriptor entity.
     */
    get authorityTemplate(): AuthorityTemplateRequestBuilder;
    /**
     * Provides operations to manage the categoryTemplate property of the microsoft.graph.security.filePlanDescriptor entity.
     */
    get categoryTemplate(): CategoryTemplateRequestBuilder;
    /**
     * Provides operations to manage the citationTemplate property of the microsoft.graph.security.filePlanDescriptor entity.
     */
    get citationTemplate(): CitationTemplateRequestBuilder;
    /**
     * Provides operations to manage the departmentTemplate property of the microsoft.graph.security.filePlanDescriptor entity.
     */
    get departmentTemplate(): DepartmentTemplateRequestBuilder;
    /**
     * Provides operations to manage the filePlanReferenceTemplate property of the microsoft.graph.security.filePlanDescriptor entity.
     */
    get filePlanReferenceTemplate(): FilePlanReferenceTemplateRequestBuilder;
    /**
     * Delete navigation property descriptors for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Represents out-of-the-box values that provide more options to improve the manageability and organization of the content you need to label.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of FilePlanDescriptor
     */
     get(requestConfiguration?: RequestConfiguration<DescriptorsRequestBuilderGetQueryParameters> | undefined) : Promise<FilePlanDescriptor | undefined>;
    /**
     * Update the navigation property descriptors in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of FilePlanDescriptor
     */
     patch(body: FilePlanDescriptor, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<FilePlanDescriptor | undefined>;
    /**
     * Delete navigation property descriptors for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Represents out-of-the-box values that provide more options to improve the manageability and organization of the content you need to label.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DescriptorsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property descriptors in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: FilePlanDescriptor, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents out-of-the-box values that provide more options to improve the manageability and organization of the content you need to label.
 */
export interface DescriptorsRequestBuilderGetQueryParameters {
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
const DescriptorsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DescriptorsRequestBuilderNavigationMetadata: Record<Exclude<keyof DescriptorsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    authorityTemplate: {
        uriTemplate: AuthorityTemplateRequestBuilderUriTemplate,
        requestsMetadata: AuthorityTemplateRequestBuilderRequestsMetadata,
    },
    categoryTemplate: {
        uriTemplate: CategoryTemplateRequestBuilderUriTemplate,
        requestsMetadata: CategoryTemplateRequestBuilderRequestsMetadata,
    },
    citationTemplate: {
        uriTemplate: CitationTemplateRequestBuilderUriTemplate,
        requestsMetadata: CitationTemplateRequestBuilderRequestsMetadata,
    },
    departmentTemplate: {
        uriTemplate: DepartmentTemplateRequestBuilderUriTemplate,
        requestsMetadata: DepartmentTemplateRequestBuilderRequestsMetadata,
    },
    filePlanReferenceTemplate: {
        uriTemplate: FilePlanReferenceTemplateRequestBuilderUriTemplate,
        requestsMetadata: FilePlanReferenceTemplateRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DescriptorsRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createFilePlanDescriptorFromDiscriminatorValue,
        queryParametersMapper: DescriptorsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createFilePlanDescriptorFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeFilePlanDescriptor,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const DescriptorsRequestBuilderUriTemplate = "{+baseurl}/security/labels/retentionLabels/{retentionLabel%2Did}/descriptors{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */